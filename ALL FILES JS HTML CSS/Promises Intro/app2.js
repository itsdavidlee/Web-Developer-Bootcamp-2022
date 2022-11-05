makeRequest(() => {

},
    //above would be referred to as success callback (first callback)
    () => {

    })
//second callback here, referred to as failure callback... only if first callback doesn't run



makeRequest(() => {
    makeRequest(() => {
        makeRequest(() => {

        },
            () => {

            })

    },
        () => {

        })
},
    () => {

    })

//above is a double nested callback in a callback