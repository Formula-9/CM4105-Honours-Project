<h1 class="centered">Creating Quantum Circuits with Qiskit</h1>

In the previous lab, we have set up the Python programming language as well as the Qiskit library and
its dependencies. In this lab, we are going to review what has been in Lesson 3, and explore Quantum
Gates. The goal will be to get a better understanding of said gates by experimenting with them.

## Preface: Creating an IBM Q Experience Account

In order to be able to run code designed for Quantum Computers with Qiskit, we need an IBM Q Experience account. Once this account has been created, we can acquire a token that can be used in Qiskit notebooks to be able to run Quantum Circuits built with Qiskit on the IBM Q mainframes.

Luckily, it is easily to create one, and if you already have a Google, Twitter, LinkedIn or GitHub account, this step can be even faster. If you don't use any of these services, it is still possible to create an IBM ID with your mail address and a password.

## Acquiring your IBM Q Account Token

Once your account has been created, you can go and acquire your token [here][ibm-q-account]. Click on Copy Token, and save said token somewhere safe. As said previously, this token is required to access the various IBM Q mainframes to execute Quantum Circuits you'll design.

<img class="img-block centered" src="img/lab02/qiskit-code.png">

Now, you can save your account with this simple snippet of code:

```python
from qiskit import IBMQ
IBMQ.save_account('MY_API_TOKEN')
```

And anything you wish to load your account's data, use the following portion of code:

```python
# Note: if you have imported everything in Qiskit (import * from qiskit), this line is useless.
from qiskit import IBMQ
IBMQ.load_account()
```

## Exercise 1: Quantum Fourier Transform

The first exercise of this Lab will consist of building a circuit to create the quantum equivalent of a Fourier transform algorithm.

<!--TODO: Section:  -->

## Exercise 2: Quantum Teleportation

In this exercise, we will review the principle of Quantum Teleportation seen in Lesson 1, by building a circuit to see how it works.

<!--TODO: Section: Make the Circuit, and describe the operations. Reference Lesson 1! -->

## Bonus: Completed Jupyter Notebook

<!-- TODO: Write the notebook ! -->

## References

[ibm-q-account]: https://quantum-computing.ibm.com/account
