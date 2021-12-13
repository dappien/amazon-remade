
function Currency({price}) {
    let text1 = "$";
    let text2 = price;
    console.log(text2)
    let result = text1.concat(text2);
    return (
        <div>
            {result}
        </div>
    )
}

export default Currency
