import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

const Block = ({ count }) => {
    const [booleanState, setBooleanState] = useState(true)
    const [objectState, setObjectState] = useState({ var1: 'var1', var2: 'var2' })

    const externalFunction = useCallback(() => {
        console.log("function called")
    }, [])

    useEffect(() => {
        externalFunction()
    }, [externalFunction])

    useEffect(() => {
        console.log("this run every render of Block")
        return () => {
            console.log("this is the cleanup for each render")
        }
    })

    useEffect(() => {
        console.log("Block did mount")

        return () => {
            console.log("Block will unmount")
        }
    }, [])

    useEffect(() => {
        console.log('this run when the component did mount and set a state depending of the previous or initial without add a dependency')
        setObjectState(prev => {
            console.log(prev)
            return {
                ...prev,
                var3: 'var3'
            }
        })
    },[])

    useEffect(() => {
        console.log("this run when count changes")
        return () => {
            console.log("this is the cleanup when count changes")
        }
    }, [count])

    console.log('Render Block')
    return (
        <div>
            <p>This is a component, you clicked the button {count} times</p>
            <button onClick={() => setBooleanState(!booleanState)}>This changes a state</button>
        </div>

    )
}

export default Block