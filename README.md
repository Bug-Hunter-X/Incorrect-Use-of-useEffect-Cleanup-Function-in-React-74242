# Incorrect Use of useEffect Cleanup Function in React
This example demonstrates an incorrect usage of the cleanup function within React's `useEffect` hook.  Attempting to modify state within the cleanup function after the component has unmounted can lead to unexpected behavior, including memory leaks or rendering issues. 
The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem
The problem lies in the `useEffect` hook's cleanup function.  While it might seem logical to perform some cleanup actions, such as resetting state, doing so can lead to errors and potentially memory leaks.  After a component unmounts, changes to its state are meaningless and may cause issues in the React reconciliation process.

## Solution
The solution involves removing any state modification from the cleanup function. The cleanup function should be solely focused on releasing resources, unsubscribing from events, or performing actions that should only be executed when the component unmounts.   Avoid side effects that may affect the state of the application after the component has already been removed from the DOM.