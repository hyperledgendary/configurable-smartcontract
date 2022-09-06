# configurable-smartcontract

Axioms:

- Smart contracts are stateless
- Chaincode is stateless
- Changing even a default value are distinct chaincode logic routines.  Even if they differ by an env parameter, they have a different meaning to the blockchain / ledger.  It adheres to the concept of the immutability of what is installed on the ledger is actually what is run on the ledger.
- in theory there is no difference between practice and theory

Reality:

A Smart Contract will go through evolutions in its implemenation; yet the core logical routines that define the nature of the Smart Contract must remain compatible with the nature of the Smart Contract used by other peers and with itself over time.


HighLevel:

A given `key` in the ledger holds a SmartContract's 'Blueprint' - when smart contracts start they load this blueprint if it exists and use it guide their behaviour.

Only a configuration transaction can change the _blueprint_

StateModel:

```
                       
                   regular business txs
                             |
                             +----------------------------+
                             |                            |
NASCENT ==> EVOLVING ==> AVAILABLE[s0] ==> EVOLVING ==> AVAILABLE[state1] ==> .....
         |            |                 |            |
     configtx         |             configtx         | 
                evolvetx                          evolvetx   
                (auto on next tx)

```

- **NASCENT** Immediately after the chaincode has created, before any transactions have been submitted
    - only configuartion txs are applicable
    - configtx when submitted and endorsed-committed will move on
- **EVOLVING** Blueprint has been updated, chaincode needs to
    - adjust running state 
- **AVAILABLE** Able to run general transaction functions as defined in - based on the nature as defined in ledger


Transtions from Nascent occur when 
 - configuration tx is sent
 - chaincode comes on line, and checks the smart contract nature and finds it is in stateX
 - post configuration tx - the next tx should evolve - (auto or manual?)


Ledger contained Blueprint:

Key: [cc:blueprint]
Value: 
```
{
    "$schema":" ",                  # defines the schema for this document
    "evolution_version":"3.4.5"     # defines the evolutionary step from which the chaincode implementation
                                    # can determine if it needs to take any compensatory action
    "metadata_fingerprint":"xxxx"   # fingerprint of the metadata that should currently be running
    "state":"NASCENT|EVOLVING|AVAILABLE"

    "data_schema":""
    "data":{

        ...
    }
}    
```

