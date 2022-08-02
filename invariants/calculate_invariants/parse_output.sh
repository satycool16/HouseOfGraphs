#!/bin/bash

if [ "$#" -ne 3 ]
then
	echo "3 arguments are needed; the output line, the regex pattern it must adhere to and the number of invariants that are calculated"
	exit 1
fi

output=$1
pattern=$2
nr_of_invariants=$3

string_to_double() {
    if [[ $1 =~ ^false$ ]]; then
	echo 0
    elif [[ $1 =~ ^true$ ]]; then
    	echo 1
    elif [[ $1 =~ ^Infinity$ ]]; then
	echo "'infinity'"
    elif [[ $1 =~ ^NaN$ ]]; then
        echo "NULL"
    elif [[ $1 =~ ^-?[0-9]+(\.[0-9]*)?$ ]]; then
    	echo $1
    else
        echo "Result isn't convertable to double"
        exit 1
    fi

}

if [[ "$output" =~ ^$pattern$ ]]; then

    initial_rematch=( "${BASH_REMATCH[@]}" )
    i=1
    res=""
    while [[ $i -le $nr_of_invariants ]]
    do
	if [[ $i -gt 1 ]]; then
	    res+=" "
	fi
        val=$(string_to_double ${initial_rematch[$i]})
        res+=$val
	((i++))
    done
    echo $res
else
    echo "Given output doesn't match with specified regex pattern"
    exit 1
fi
