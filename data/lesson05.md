<h1 class="centered">Quantum Cryptography</h1>

## Introduction: The current state of cryptography

Currently, due to the cost of building Quantum Computers, cryptographic operations are performed on
computers. However, because of the complexity of cryptographic algorithms, these operations are often
slow.

This cost in run time also comes with a positive: currently, messages or data encoded with strong
algorithms (ex: RSA-2048) would simply not be easy to brute-force, even with a computer with tremendous
computing power.

However, with the potential rise of Quantum Computers in the future, this could change for reasons
that will be explained below.

## How does Quantum Computing changes modern cryptography ?

First of all, a small flashback to the previous lesson. It was said how Grover and Shor's algorithms
could be used to brute-force respectively symmetrical and asymmetrical cryptographic algorithms.

However, to do so, a Quantum Computer with many qubits would be needed, so **currently, the idea of forcing current cryptographic solutions with a Quantum Computer is only something that can happen in the future.**

A pertinent question would be whether it could be possible to implement standard cryptographic
algorithms on Quantum Computers, and what would be the resulting cost. After all, if we can not
force the current existing solutions, can we improve them ?

According to a paper written by Langenberg, B., Pham, H. and Steinwandt, R. in 2019 and published
in 2020 in *IEEE Transactions on Quantum Engineering*, even implementing current encryption algorithms
would be costly. In the case of the mentioned paper, the authors reviewed the implementation of
the Advanced Encryption Standard (AES) in the form a Quantum Circuit, and how to reduce the cost of
implementing it. However, even AES-128 requires a number of Qubits that isn't simply feasible currently:
the authors found that **864 Qubits would be required to be able to implement AES-128 as a Quantum Circuit.**

As a reminder, the Jiuzhang Quantum Computer, has 76 Qubits. This highlights the fact that, unless better
solutions or ways to build Quantum Computers capable of manipulating more Qubits are found, **it is unlikely that Quantum Computers will be an immediate threat to cryptography.**

But the interest is still there, and in fact, Quantum Computer Scientists are studying the future of cryptography
for when said better Quantum Computers will be available: **Post-Quantum Cryptography**.

## Post-Quantum Cryptography: a challenge for the future ?

<!-- TODO: Section -->

## References

- Pirandola, S., Andersen, U., Banchi, L., Berta, M., Bunandar, D., Colbeck, R., Englund, D., Gehring, T., Lupo, C., Ottaviani, C., Pereira, J., Razavi, M., Shaari, J., Tomamichel, M., Usenko, V., Vallone, G., Villoresi, P. and Wallden, P. (2019). Advances in Quantum Cryptography. \[online\] . Available at: https://arxiv.org/pdf/1906.01645.pdf.

‌- Gisin, N., Ribordy, G., Tittel, W. and Zbinden, H. (101AD). Quantum cryptography. \[online\] . Available at: https://arxiv.org/pdf/quant-ph/0101098.pdf [Accessed 15 Feb. 2021].

- Yin, J., Li, Y.-H., Liao, S.-K., Yang, M., Cao, Y., Zhang, L., Ren, J.-G., Cai, W.-Q., Liu, W.-Y., Li, S.-L., Shu, R., Huang, Y.-M., Deng, L., Li, L., Zhang, Q., Liu, N.-L., Chen, Y.-A., Lu, C.-Y., Wang, X.-B. and Xu, F. (2020). Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature, 582(7813), pp.501–505.

- Langenberg, B., Pham, H. and Steinwandt, R. (2020). Reducing the Cost of Implementing the Advanced Encryption Standard as a Quantum Circuit. IEEE Transactions on Quantum Engineering, \[online\] 1, pp.1–12. Available at: https://ieeexplore.ieee.org/document/8961201 \[Accessed 17 Feb. 2021\].