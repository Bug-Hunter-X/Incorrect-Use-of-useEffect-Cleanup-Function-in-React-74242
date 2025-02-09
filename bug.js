```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a non-effect cleanup function
    return () => {
      console.log('Component unmounting...');
      //This will cause a memory leak or unexpected behavior if you have some cleanup logic here
      setCount(100); //this is wrong, it will cause unexpected behavior
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```