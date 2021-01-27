<h1 class="centered">Lesson 1 - An Introduction to Quantum Mechanics</h1>

## Why Quantum Mechanics ?

This is a commonly asked question: why would knowledge of Quantum Mechanics be
required to understand Quantum Computing ? The reason for that is, Quantum
Computing involves Quantum Mechanics for almost everything. Understanding at
the very least the basics allows to understand how Quantum Computer work,
hence why the basics have to be covered. Through the lessons, if needed,
explanation and vulgarization of these concepts will be given in order to be
easier to understand.

<img class="img-block centered" src="img/lesson01/xkcd-0.png">

<h3 class="img-caption centered">(Source: <a href="https://xkcd.com/1861/">XKCD #1861: Quantum</a>, the relevant <a href="https://www.explainxkcd.com/wiki/index.php/1861:_Quantum">Explain XKCD page</a> is also worth a read)</h3>


## Dirac's Bra-Ket Notation

Quantum Mechanics starts by adding a new notation: [Paul Dirac][dirac-page]'s Bra-Ket notation.This notation is as follows:

<img class="img-block centered" src="img/lesson01/dirac_notation.png">

In the previous example, **⟨𝑎|** is known as a **Bra**, and **|𝑏⟩** is known as a **Ket**.
Essentially, they are **vectors**. However, there is a difference between a Bra and a Ket.
Their difference can be expressed mathematically by the following expression:

<img class="img-block centered" src="img/lesson01/bra_ket_relation.png">

The <span class="math-formula math-exponent">†</span> symbol is known as the **conjugate transpose** operator.
It transposes a vector/matrix, and replaces each entry with their complex conjugate. Let us
see an example of what it means:

<img class="img-block centered" src="img/lesson01/dagger_example.png">

In addition to this notation, bra and kets have other properties. For instance, let us see how
their inner product behave with the following example:

<img class="img-block centered" src="img/lesson01/bra_ket_inner_product.png">

This is the inner product of two kets: **|𝑎⟩** and **|𝑏⟩**. As we can see, the ket **|𝑎⟩** has been "flipped" to become a bra. In addition, the result of this expression is a **complex number**.

Bra and Kets also have the concept of **outer product**. The outer product of a bra and a ket (often noted as ket-bra) can be seen as a **matrix multiplication**, like in the following example:

<img class="img-block centered" src="img/lesson01/outer_product_example.png">

However, stating that the outer product of a ket and a bra is a simple matrix multiplication would be false.
An outer product is mathematically defined as the following operation:

<img class="img-block centered" src="img/lesson01/outer_product_math.png">

The notation makes sense, we know that a bra is essentially the conjugate transpose of a ket, so saying
that ket-bra is the is essentially the multiplication of a ket with a ket's conjugate transpose is true. 

The last mathematical operator that will be explained is the **Tensor operator**. This is often called
direct product or Carthesian product, and it is defined as follows:

<img class="img-block centered" src="img/lesson01/carthesian-product.png">

As we can see, it basically allows us to create multiple-state vectors. This property is useful since it
is required to understand some of the later concepts seen in Quantum Mechanics (and by extension, Quantum Computing).

## Quantum Superposition

Now we have the mathematical building blocks required to understand more advanced concepts that use the
bra-ket notation. Let us start with the concept of Quantum Superposition. Quantum Superposition could
be defined as the idea that a system with ***n*** states **is in all the possible states at the same time, until observed**. The observation of the system causes a phenomenon known as **collapse**, which will make the system "select" one of the possible states.

Of course, it is possible for all the states to have probabilities to appear. These probabilities will be
expressed as eigenvalues, and the states will be expressed as eigenvectors. A clearer example would be a system
***S*** with three possible states: ***A***, ***B*** and ***C***. We will consider c<span class="math-subscript">0</span>, c<span class="math-subscript">1</span> and c<span class="math-subscript">2</span> the respective eigenvalues defining the probabilities for A, B and C to be observed. We can then express our system as the **|Ψ⟩** vector as follows:

<img class="img-block centered" src="img/lesson01/superposition-math.png">

## Quantum Entanglement and No-Cloning Theorem

Quantum Entanglement is defined on [Wikipedia][wiki-qe] by the following definition: 

*«Quantum entanglement is a physical phenomenon that occurs when a pair or group of particles is generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the pair or group cannot be described independently of the state of the others, including when the particles are separated by a large distance.»*

A simpler definition could be made from this verbose description. To explain the concept from another point of view,
imagine participating in one of these TV shows. You are asked to pick between two doors. Each door has a prize behind it, but the value of the prizes are different: one has a prize that is worth a lot of money and the other is close to worthless.

Thing is, you don't which prize what is behind each door. In a way, this is **Quantum Entanglement**. Why ? Because
opening a door would **reveal the state of a door, and you would be able to reveal the state of the other door**.
So their states are dependent, and even if the second door was in another galaxy, opening the door in front of you
would still reveal the other door's state.

With this comes an important theorem of Quantum Mechanics: the **No-Cloning Theorem**. It explains that it is
impossible to clone a quantum state properly. To demonstrate it, let us imagine a quantum state **|𝑎⟩** and a second
quantum state **|b⟩**. Now, let us imagine the existence of a theoretical function we will note as **𝐶**, that is
defined as follows:

<img class="img-block centered" src="img/lesson01/no-cloning-function.png">

**𝐶** being an unitary operation, the following must be true:

<img class="img-block centered" src="img/lesson01/unitary-clone.png">

And therefore, we obtain the following proof:

TODO:

## Quantum Teleportation

TODO:

<img class="img-block centered" src="img/lesson01/xkcd-1.png">

<h3 class="img-caption centered">(Source: <a href="https://xkcd.com/465/">XKCD #465: Quantum Teleportation</a>, <a href="https://www.explainxkcd.com/wiki/index.php/465:_Quantum_Teleportation">Explain XKCD page</a>)</h3>

## References

If something seems unclear, these resources might be worth a read, they detail the subjects covered by this
lesson with more depth, but they may be complicated to understand.

Bra-ket Notation:

- https://docs.microsoft.com/en-us/quantum/concepts/dirac-notation
- http://www.physics.unlv.edu/~bernard/phy721_99/tex_notes/node6.html
- https://www.physics.umd.edu/courses/Phys374/fall05/files/DiracNotation.pdf
- https://en.wikipedia.org/wiki/Bra–ket_notation

Quantum Superposition:

- http://physics.gmu.edu/~dmaria/590%20Web%20Page/public_html/qm_topics/superposition/superposition.html

Quantum Entanglement:

- https://www.sciencealert.com/entanglement
- https://en.wikipedia.org/wiki/Quantum_entanglement

No-Cloning Theorem:

- https://www.quantiki.org/wiki/no-cloning-theorem
- https://inst.eecs.berkeley.edu/~cs191/fa05/lectures/lecture6_fa05.pdf
- https://www.strathweb.com/2020/08/introduction-to-quantum-computing-with-q-part-6-no-cloning-theorem/

Quantum Teleporation:

- https://brilliant.org/wiki/quantum-teleportation/
- https://physics.stackexchange.com/questions/62794/mathematical-explanation-of-quantum-teleportation
- http://lightlike.com/teleport/teletalk.pdf
- https://qiskit.org/textbook/ch-algorithms/teleportation.html
- https://en.wikipedia.org/wiki/Quantum_teleportation

[dirac-page]: https://en.wikipedia.org/wiki/Paul_Dirac
[wiki-qe]: https://en.wikipedia.org/wiki/Quantum_entanglement