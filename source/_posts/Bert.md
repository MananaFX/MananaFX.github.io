---
title: Bert
date: 2022-10-13 16:30:17
categories: NLP
tags: [大四上,预训练模型,Bert,Transformer,情感分类]
---

# Bert理论

## 1.作用

来自Transformer模型的编码器，给定**某单词**可以获得其包含句子信息的**词向量**。

## 2.预训练输入表示

### 2.1 Embedding

用于将输入转换为词向量

#### 2.1.1 Token Embedding

分词并进行标记

1. [CLS] 句子开始标记，表明用于分类任务
2. [SEP] 分割标记，每个句子的结尾

转换为Token Embedding

![image-20210908223205534](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/cd80828d38f5023a4f0a0af7fdb25981.png)

#### 2.1.2 Segment Embedding

将句子分为两段，用以区别两个句子

![image-20210908223807047](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/16e3107a08b13f43eac1f5719658f487.png)

#### 2.1.3 Position Embedding

用记录句子中单词的顺序信息

![image-20210908224210612](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/b17d44a2ab24f393d82e402310564ffa.png)

#### 2.1.4 

![image-20210908230519995](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131547702.png)

### 2.2 WordPiece分词器

### 2.2.1 Tokenization

##### 2.2.1.1 单词级

优点：

1. 拉丁语系Tokenization简单
2. 能够很好地保留词的语义和边界信息

缺点：

1. 词典过大，影响计算效率及内存
2. 由于词汇的不断发展，造成OOV（Out Of Vocabulary）
3. 低频词/稀疏词得不到充分训练
4. 一个单词因为不同的形态会产生不同的词，如由“look”衍 生出的“looks”, “looking”, 但是意义相近，对他们都进行训练是不必要的。

##### 2.2.2.2 字粒度

没人用

### 2.2 Subword Tokenization

#### 2.2.1 Byte Pair Encoding

BPE迭代地合并最频繁出现的字符或字符序列

##### 2.2.1.1 词汇表生成

![img](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131954943.jpg)

##### 2.2.1.2 编码

1. 将字词词表由大到小排序
2. 从前向后遍历字词词表，依次判断一个子词是否为单词的子串
3. 单词中仍然有子串没有被切分，那么这些子串一定为低频词，则使用统一的标记`<UNK>`进行替换

['the</w>', 'highest</w>', 'mountain</w>'] -> ['the</w>', 'high', 'est</w>', 'moun', 'tain</w>']

#### 2.2.2 WordPiece

与BPE相比

- 相同点：每次从统计语料中选取出两个新的子词进行合并
- 不同点：WordPiece按能够使得LM（似然）概率最大的相邻子词加入词表

设句子 s = {t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub>, t<sub>4</sub>, t<sub>5</sub>, ....., t<sub>n</sub>}, 共有n个子词, 则句子s的语言模型对数似然值为：
$$
logP(s)=∑_{i=1}^{N}logP(t_i)
$$
合并某两个子词后，对数似然值增益为：
$$
logP(t_x)−(logP(t_i)+logP(t_j))=log(\frac{P(t_x)}{P(t_i)P(t_j)})
$$


## 3.预训练策略

### 3.1 Masked LM 

#### 3.1.1 方式

在在每一个训练序列中以15%的概率随机地选中某个token位置用于预测

1. 80%的概率下，用`[MASK]`标记替换该token
2. 10%的概率下，用`随机单词`替换该token
3. 10%的概率下，该token`保持不变`

预测出原来的token并计算loss

#### 3.1.2 意义

利用这种高度不确定的情况，可以倒逼模型快速学习该token的`上下文语义`，令到BERT不再只对[MASK]敏感，而是对所有的token都敏感，以致能抽取出任何token的表征信息。

#### 3.1.3 实现

1.通过 Encoder，将经过MASK的**词嵌入E**转换为**词嵌入R**

![img](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131602277.png)

2.将R<sub>MASK</sub>喂给带有softmax的前馈神经网络，得到**词表**中每个单词属于该MASK的概率

![Screenshot 2022-10-13 at 16.08.19](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131608252.png)

### 3.2 Next Sentence Prediction

#### 3.2.1 方式

NSP为二分类任务。将两个句子送入Bert中，Bert需要判断第二个句子是否为第一个句子的下一句

1. 从语料库中，选取相连句子标记为isNext，随机选取不相连句子标记为notNext，各为50%

#### 3.2.2 意义

使得模型可以理解两个句子之间的关系，有利于很多下游任务，像问答和文本生成。

#### 3.2.3 模型

经过了Encoder的每一个词嵌入R都包含了整个句子的信息，因此可以直接使用R<sub>[CLS]</sub>进行二分类，以判断两个句子是否相连

![img](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131617738.png)

## 4.预训练细节

### 4.1 Learning Rate Scheduling

意义：在初始迭代期设置较大的学习率而在之后的迭代期减少学习率

#### 4.1.2 Warmup Steps

1. 在前10%的steps中，lr从0线性增加到 init_learning_rate

2. 之后lr又从 init_learning_rate 线性衰减到0（完成所有steps）

意义：

1. 可以避免较早的对mini-batch过拟合，即较早的进入**不好的局部最优**而无法跳出
2. 保持模型深层的稳定性

### 4.2 激活函数-GELU(**Gaussian Error Linear Unit**)

$$
GELU(X) = Xϕ(X)
$$

意义：在<u>激活中引入了随机正则</u>的思想，使得<u>随机依赖于输入</u>，直观上更符合自然的认识，同时实验效果要比Relu与ELU都要好。

#### 4.2.1 激活函数作用

非线性，如在二分类问题中，不是一刀切，而是弯弯扭扭切

- Relu-缺乏随机因素
- Sigmoid-容易饱和

提升模型泛化能力

- 使用dropout

#### 4.2.2 Input Features ：X<sub>ij</sub>

- X<sub>ij</sub>∼N(0,1), X∈R<sup>mxn</sup>
- 输入值X<sub>ij</sub>满足正态分布，即均值为0，方差为1

#### 4.2.3 ϕ(X)

$$
Bernoulli(ϕ(x_{ij})), where ϕ(x_{ij}) = P(X_{ij}≤x_{ij})
$$

- zero-or-identity的映射
- 在输入中越大的特征，更容易被保留


$$
ϕ(x_{ij})=∫^{x_{ij}}_{−∞}\frac{1}{\sqrt{2\pi}}e^{−\frac12t^2}dt
$$

- 对于特定值x，任何输入值 X小于或等于x的概率，即为该x被保留的概率

- 由于X满足正态分布，因此可以使用概率密度函数计算出X在输入中的位置，使用积分（公式3）来获得

![](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131751939.png)

#### 4.2.4 近似数学公式

$$
GELU(x) = 0.5x(1+tanh[\sqrt{2/π}(x+0.044715x^3)])
$$

#### 4.2.5 源码表示

```python
def gelu(input_tensor):
	cdf = 0.5 * (1.0 + tf.erf(input_tensor / tf.sqrt(2.0)))
	return input_tesnsor*cdf
```

#### 4.2.6 函数图像

![GeLU](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210131633790.png)



# 参考资料

1. https://helloai.blog.csdn.net/article/details/120211601 【理论篇】是时候彻底弄懂BERT模型了
2. http://www.360doc.com/content/20/0825/16/7673502_932137230.shtml 通俗讲解从Transformer到Bert模型！
3. https://alaaalatif.github.io/2019-04-11-gelu/ On the GELU Activation Function-What the hell is that?
4. https://zhuanlan.zhihu.com/p/349492378 BERT中的激活函数GELU：高斯误差线性单元
5. https://zhuanlan.zhihu.com/p/444774532 NLP中的Tokenization