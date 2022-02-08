import { useState } from "react";
function Prime() {
    let [prime, setPrime] = useState("");
    function isPrime(event) {
        event.preventDefault();
        let formTag = event.target;
        let minValue = parseInt(formTag.min.value);
        let maxValue = parseInt(formTag.max.value)
        let primeValue = ""
        for (let x = minValue; x <= maxValue; x++) {
            let flag = 0;
            for (let i = 2; i <= x / 2; i++) {
                if (x % i == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                primeValue = primeValue + x + ", "
            }

        }
        alert(primeValue);
        setPrime(primeValue);

    }
    return (
        <div>
            <form onSubmit={isPrime}>
                <div>Prime Numbers: {prime}</div>
                <input type="number" name="min" placeholder="Enter Min Value" />
                <input type="number" name="max" placeholder="Enter Max Value" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Prime;