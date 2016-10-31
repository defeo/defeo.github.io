---
layout: post
category: internship
tags: [research, isogenies]
title: Stage de M2 – Protocoles d'échange de clefs à base d'isogénies
---

## Contexte

Une *isogénie* est un morphisme surjectif et de noyau fini de variétés
abéliennes. Les exemples les plus simples d'isogénies sont les
morphismes algébriques de courbes elliptiques qui préservent les
points à l'infini.

La cryptographie à base d'isogénies est une des branches les plus
jeunes de la cryptographie asymétrique. Initiée il y a seulement 10
ans par les travaux sur les réductions de logarithmes
discret[^1] [^2] [^3], et sur les fonctions de hachage prouvablement
sûres[^4], elle s'est ensuite enrichie de protocoles d'échange de
clef[^5] [^6] [^7]. Il existe essentiellement deux protocoles d'échange
de clefs à base d'isogénies : un basé sur les courbes elliptiques
*ordinaires*[^5], et un autre basé sur les courbes elliptiques
*supersingulières*[^6]. Ces deux protocoles ont tous les deux
l'intérêt de résister à des cryptanalyses par ordinateur quantique
(algorithme de Shor), mais seulement le deuxième est considéré
suffisamment efficace pour être utilisable en pratique.

Toutes les constructions cryptographiques à base d'isogénies reposent
sur des problèmes de recherche de chemins dans des *graphes
d'isogénies* ; ce sont des (multi)-graphes non-orientés où les sommets
sont des variétés abéliennes à isomorphisme près, et les arêtes sont
les isogénies.

La structure des graphes d'isogénies est régie par celle des *anneaux
d'endomorphismes* des variétés abéliennes. Dans le cas des courbes
elliptiques *ordinaires*, la théorie de la *multiplication complexe*
lie les isogénies aux idéaux fractionnaires d'un corps de nombres
quadratique imaginaire[^13] [^14]. Dans le cas des courbes elliptiques
*supersingulières*, ce sont les idéaux à gauche des ordres maximaux
d'une algèbre de quaternions qui jouent le même rôle[^13] [^15]. Ces
théories se généralisent aux variétés abéliennes de dimension
supérieure[^8] [^10] [^12], mais elles ne sont pas aussi complètes
que pour le cas elliptique.


## Sujet du stage

Le but du stage est d'étudier le protocole d'échange de clefs de
Rostovtsev et Stolbunov[^5], d'en proposer une variante efficace, et
d'en estimer soigneusement les paramètres de sécurité par une étude
des attaques quantiques connues.

On cherchera des pistes pour améliorer le protocole dans les
techniques utilisées dans les protocoles à base d'isogénies
supersingulières, ainsi que dans les généralisations aux dimensions
supérieures. L'analyse de sécurité se fera en tenant compte des
modèles de sécurité en cryptographie classique, ainsi qu'en
cryptographie post-quantique.

En cas de succès, le stage pourra se poursuivre naturellement par une
thèse en cryptographie à base de courbes elliptiques et isogénies :
construction de nouveaux cryptosystèmes, cryptanalyse, calcul
d'anneaux d'endomorphismes, etc.


## Compétences recherchées

- Connaissances mathématiques en algèbre, théorie des nombres et
  géométrie (corps finis, corps de nombres, courbes elliptiques, ...).

- Connaissances en algorithmique (par ex.: grands entiers,
  factorisation, primalité, arithmétique des courbes elliptiques).

- Maîtrise d'un système de calcul formel (par ex., SageMath, Pari/GP,
  Magma).

- Connaissance d'un langage de programmation.

Aucune connaissance en calcul quantique n'est requise, mais ceci peut
être un plus.


## Laboratoire d'accueil

Le stage s'effectuera dans l'équipe
[GRACE](https://www.inria.fr/equipes/grace) de l'Inria Saclay, sous la
direction de [Luca De Feo](http://defeo.lu/) et de
[François Morain](http://www.lix.polytechnique.fr/Labo/Francois.Morain/).
Le stagiaire sera amené à interagir avec le Laboratoire Cryptographie
et Composants de l'[ANSSI](https://www.ssi.gouv.fr/).


## Bibliographie

[^15]: Belding.
    [Number theoretic algorithms for elliptic curves](http://www.math.harvard.edu/~jbelding/MainThesis.pdf).
	
[^8]: Bisson, Cosset et Robert.
    [AVIsogenies](http://avisogenies.gforge.inria.fr/), a library for
    computing isogenies between abelian varieties

[^12]: Brooks, Jetchev et Wesolowski.
    [Isogeny graphs of ordinary abelian varieties](https://arxiv.org/pdf/1609.09793.pdf).

[^4]: Charles, Goren et Lauter.
	[Cryptographic hash functions from expander graphs](http://eprint.iacr.org/2006/021.pdf).

[^7]: De Feo, Jao et Plût.
    [Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies](https://eprint.iacr.org/2011/506.pdf).

[^14]: Fouquet et Morain.
    [Isogeny volcanoes and the SEA algorithm](http://link.springer.com/chapter/10.1007/3-540-45455-1_23#page-1).

[^1]: Galbraith, Hess et Smart.
    [Extending the GHS Weil descent attack](https://researchspace.auckland.ac.nz/bitstream/handle/2292/26672/eurowithcoversheet.pdf?sequence=6).

[^10]: Ionica et Thomé.
    [Isogeny graphs with maximal real multiplication](https://arxiv.org/pdf/1407.6672.pdf).

[^6]: Jao et De Feo.
    [Towards quantum-resistant cryptosystems from supersingular elliptic curve isogenies](http://cacr.uwaterloo.ca/techreports/2011/cacr2011-32.pdf).

[^2]: Jao, Miller et Venkatesan.
    [Do all elliptic curves of the same order have the same difficulty of discrete log?](https://arxiv.org/pdf/math/0411378.pdf)

[^11]: Jetchev et Wesolowski.
    [On graphs of isogenies of principally polarizable abelian surfaces and the discrete logarithm problem](https://arxiv.org/pdf/1506.00522.pdf).

[^13]: Kohel.
    [Endomorphism rings of elliptic curves over finite fields](http://echidna.maths.usyd.edu.au/~kohel/pub/thesis.pdf).

[^5]: Rostovtsev et Stolbunov.
    [Public-Key Cryptosystem Based on Isogenies](http://eprint.iacr.org/2006/145.pdf).

[^3]: Teske.
    [An elliptic curve trapdoor system](http://eprint.iacr.org/2003/058/20030401:012139).
