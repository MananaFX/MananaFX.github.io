---
title: CS224N
date: 2022-10-23 18:30:54
categories: NLP
tags: [大四上,CS224N,NLP]

---

# Word Vectors

## Word2vec: prediction function



## 1.Skip-gram

已知当前词语，预测上下文

### **L(θ)**:	<u>date Likelihood</u> of the capacity of predicting words in context 

**m**:  size of predicting window

**w<sub>t</sub>**: given center word 

对于每一个位置t，给定窗口内每个词w<sub>t+j</sub>预测出它的概率的累乘
$$
L(\theta)=∏_{t=1}^{T}∏_{-m≤j≤m,j≠0}P(w_{t+j}|w_t;\theta)
$$


### **J(θ):**  <u>objective function / loss function</u>

$$
J(\theta)=-\frac{1}{T}logL(\theta)=-\frac{1}{T}∑_{t=1}^{T}∑_{-m≤j≤m,j≠0}logP(w_{t+j}|w_t;\theta)
$$

累乘求最大值 =》累加求最小值



### Softmax Function——<u>Scale</u>

- **max**: amplify  the probability of larger x<sub>i</sub>
- **soft**: still assign some probability of smaller x<sub>i</sub>

$$
softmax(x) = \frac{exp(x)}{∑^n_{j=1}exp(x_j)}
$$



### Prediction Function

use two vectors per word **w** to simplify <u>math and optimization</u> and can be <u>built easily</u>.

- **v<sub>w</sub>**: vector for **center** word w
- **u<sub>w</sub>**: vector of **context** word w

**c** : center word

**o** : context word
$$
P(o|c) = \frac{exp(u_o^Tv_c)}{∑_{w∈V}exp(u^T_wv_c)}
$$
**u<sup>T</sup><sub>o</sub>v<sub>c</sub>** : **similarity** of o and c

除法为了归一化



### Gradient Descent

$$
\theta^{new} = \theta^{old} - \alpha \Delta_\theta J(\theta)
$$

在进行梯度下降之后，v<sub>w</sub>与u<sub>w</sub>会变得十分相似，因此一般直接取他们的**平均**，作为改词的**词向量**

Problems：

1. 计算量很大，因为J(θ)涉及整个语料库
2. 难以走出鞍点/局部最优点

#### solution: Stochastic gradient descent(SGD) 随机梯度下降

- 在一个小的batch里更新，即在每一个batch中，语料库只包含窗口内的所有词 



## 2.SGNS:Skip-gram Negative sampling


$$
J(\theta) = \frac{1}{T}∑^T_{t=1}J_t(\theta)
$$

$$
J_t(\theta) = log \sigma(u_o^Tv_c) + ∑^k_{i=1}E_{j\sim P(w)}[log\sigma(-u_j^Tv_c)]
$$

$$
\sigma(x) = \frac{1}{1+e^{-x}}
$$

use word provabilites to choose k negative samples

- P(w): word probabilities

- k: number of nagative samples

对于每个正例（中央词语及上下文中的一个词语）采样几个负例（中央词语和其他随机词语），训练binary logistic regression。

使得最大化中央词与上下文的相关概率，最小化与其他词语的概率

问题：

- [x] 为什么对于一个中心词只选择一个正样本呢，maybe简化的很厉害？瞅瞅代码
  - 只能说代码里面也确实只有一个正例

# Language Modeling

Assigns probability to a piece of text:
$$
P(x^{(1)},...,x^{(T)})=P(x^{(1)})*P(x^{(2)}|x^{(1)})*...P(x^{(T)}|x^{(T-1)},...,x^{(1)})
=\prod^T_{t=1}P(x^{(t)}|x^{(t-1)},...,x^{(1)})
$$

## N-gram Language Models

#### 4-gram Language Model/ 3rd order Markov Model

$$
P(w_4|w_1w_2w_3) = \frac{count(w_1w_2w_3w_4)}{count(w_1w_2w_3)}
$$

#### Sparsity Problem ：

1.分子出现次数为0

- smoothing： add small count  𝛅 for every w ∈ V

2.分母出现次数为0

- backoff:  将4-gram改为3-gram直到bi-gram

#### Storage Preambles 

Need to store count for all n-grams in the corpus

## RNN: Recurrent 

![img](https://mewtiger-1311904225.cos.ap-nanjing.myqcloud.com/liman/202210251129294.webp)

Advantages:

1. Can process **any length** input
2. Computation for step t can use information from **many steps back**(in theory)
3. Model size **doesn`t increase** for longer input context
4. Same weights applied on every timestep, so there is **symmetry** in how inputs are processed

Disadvantages:

1. Recurrent computation is **slow**
2. In practice, difficilt to access information from **many steps back**
