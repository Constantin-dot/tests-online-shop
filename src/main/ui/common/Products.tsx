let product = [
    {id: "1", title: "A", description: "sfdasf asdfasdf afda;kj;kj ;kjas"},
    {id: "2", title: "B", description: "a;sjf;lj ;jasfd;lj ;klsjdf;al"},
    {id: "3", title: "C", description: "aj;sdf;ajsd ;j;alsdkjf;lkj a;kjs"},
    {id: "4", title: "D", description: ";jlj;lj;lk ;kj;lasdjf;lkj ;jkjsdlfj; j"},
    {id: "5", title: "E", description: "psoiduwej ; sjdwoj j;jfe"},
    {id: "6", title: "F", description: "l;jer;lj ;kjerjw;lj ;kjerw"}
]


export const Products = () => {
    return <ul className="list-group">
        {product.map(product => (
            <li className="list-group-item product" key={product.id}>
                <h3>{product.title}</h3>
                {product.description}
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm"
                >
                    &times;
                </button>
            </li>
        ))}
    </ul>
}