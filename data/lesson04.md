<h1 class="centered">Quantum Algorithms</h1>

## Introduction to Quantum Algorithms

In the previous lessons, we have seen the concepts of Qubits, their representation, and Quantum Gates. Therefore,
we know part of how a Quantum Computer works, so the next step is the creation of Quantum Algorithms.

Considering that we can't exactly "run code" on a Quantum Computer like we do on normal computers, we have to
build circuits using Quantum Gates to achieve a similar effect by directly manipulating Qubits.

Now, the reason why Quantum Algorithms exist is because they can provide, in some cases, exponential speed-up
over their classical counterparts. This speed-up can be complicated to explain, but is generally attributed
to the behaviour demonstrated by Qubits.

Additionally, Quantum Algorithms have another property not found in classical algorithms: **Quantum Algorithms are non-deterministic**. This means that while Quantum Algorithms are supposed to follow a set of rules, much
like classical algorithms, they are impossible to predict, again due to the random nature of Qubits.

## The Deutsche-Jozsa Algorithm

Let us start with an algorithm that has mathematical usage: the Deutsche-Jozsa algorithm. Named after its
two creators David Deutsche and Richard Jozsa, its use is to determine if a binary function (a function
returning either 0 or 1) is constant or balanced. 

The main reason why a quantum implementation is better for this algorithm is because of the number of
iterations required to determine the nature of the function. On a standard computer, to determine the
nature of the function, if we consider that the function take ***n*** parameters, it would then take
**2**<span class="math-formula math-exponent">n-1</span>**+1** iterations. However, with a Quantum Computer, and the Quantum version of this algorithm, a single iteration is enough to determine the nature of the function.

A visual representation of the algorithm as a circuit is as follows:

<img class="img-block centered" src="https://qiskit.org/textbook/ch-algorithms/images/deutsch_steps.png">
<h3 class="img-caption centered">(Source: <a href="https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html">Qiskit's page of the Deutsche-Jozsa algorithm</a></h3>

Let us analyze this circuit. The first line represents the input to the function that will be tested.

## Shor's Algorithm

The next algorithm is made by [Peter Shor][peter-shor], and is another algorithm that has a speed advantage over
its classical implementations. **Shor's Algorithm is a Quantum Algorithm used for integer factorization.**

To illustrate the difference in time complexity, Shor's algorithm is estimated to have a time complexity of
O(log(n<span class="math-formula math-exponent">3</span>)), whereas a classical equivalent, the Number Field Sieve
has an estimated time complexity of O (exp(1.9\*log(n<span class="math-formula math-exponent">1/3</span>)\*log(log(n))<span class="math-formula math-exponent">2/3</span>).

What makes this algorithm important is that due to its capacity to factor big integers quicker than standard computers, **it could be used to break public-key cryptography systems, such as the SHA family of algorithms.**
Of course, in order to factor integers as big as the RSA integers, quantum computers with high amounts of Qubits
would be required, and quantum decoherence could also be a challenge to the algorithm's execution.

<!--TODO: Section: How does it work ? + Implementation of the algorithm (Circuit) -->

## Grover's Algorithm

Another useful algorithm is Grover's Algorithm, named after [Lov Grover][lov-grover]. **It is a search algorithm that, given a function, can find with high probability the input that was passed to the function, using the output.** Its time complexity has been estimated to be O(√n), whereas classical equivalents, such as Quick Search algorithms, have an estimated time complexity of O(n/2).

As a result of this property, Grover's Algorithm could find applications in database systems, as it could provide
better performance than current algorithms, but **it could also see some minor applications to attack symmetric-key systems, since it could be used to search for the keys used to encrypt messages.** But, in the latter case, more efficient algorithms exist.

<!--TODO: Implementation of the algorithm (Circuit) -->

## References

- community.qiskit.org. (n.d.). Deutsch-Jozsa Algorithm. \[online\] Available at: https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html [Accessed 3 Feb. 2021].

- Voorhoede, D. (n.d.). Code example: Deutsch-Jozsa algorithm. \[online\] Quantum Inspire. Available at: https://www.quantum-inspire.com/kbase/deutsch-jozsa-algorithm/ \[Accessed 3 Feb. 2021\].

- Beckman, D., Chari, A.N., Devabhaktuni, S. and Preskill, J. (1996). Efficient networks for quantum factoring. Physical Review A, \[online\] 54(2), pp.1034–1063. Available at: http://pra.aps.org/abstract/PRA/v54/i2/p1034_1 \[Accessed 7 Feb. 2021\].

- Silva, V. and Springerlink (Online Service (2018). Practical Quantum Computing for Developers : Programming Quantum Rigs in the Cloud using Python, Quantum Assembly Language and IBM QExperience. Berkeley, Ca: Apress.

- JMiszczak (2005). Shor’s factoring algorithm. \[online\] Quantiki. Available at: https://www.quantiki.org/wiki/shors-factoring-algorithm.

- Grover, L.K. (1996). A fast quantum mechanical algorithm for database search. arXiv:quant-ph/9605043. \[online\] Available at: https://arxiv.org/abs/quant-ph/9605043.

- Silva, V. and Springerlink (Online Service (2018). Practical Quantum Computing for Developers : Programming Quantum Rigs in the Cloud using Python, Quantum Assembly Language and IBM QExperience. Berkeley, Ca: Apress.
‌
[peter-shor]: https://en.wikipedia.org/wiki/Shor%27s_algorithm
[lov-grover]: https://en.wikipedia.org/wiki/Lov_Grover