Invarianten berekenen met oude Grinvin-code
===

Voer uit met een opdracht zoals

    java -jar grinvin-legacy.jar org.grinvin.invariants.Diameter
	
Laatste argument is een Grinvin-id van een invariant. Java moet
minstens versie 17 zijn.

Invoer is de adjacencymatrix van een graaf, bijvoorbeeld

    0 1 1 0 
	1 0 0 1
	1 0 0 1
	0 1 1 0
	
Afhankelijk van het type van de invariant is de uitvoer een geheel
getal, kommagetal (met mogelijk`Infinity` en `NaN`) of een
booleaanse waarde (`true` / `false`).

(Er zijn nog andere mogelijkheden, maar wellicht niet met de
invarianten die nu in de database zitten.)


