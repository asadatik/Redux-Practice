import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/feature/counter/counterSlice";
import { useAppSelector } from "./Redux/hook";
function App() {
    const dispatch = useDispatch();
    const { count } = useAppSelector((state) => state.counter);
    const handleIncrement = (amount) => {
        dispatch(increment(amount));
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "COUNTER WITH REDUX" }), _jsx("button", { onClick: () => handleIncrement(5), children: "Increment by 5 " }), _jsx("button", { onClick: () => handleIncrement(1), children: "Increment" }), _jsx("p", { children: count }), _jsx("button", { onClick: handleDecrement, children: "  Decrement" })] }));
}
export default App;
