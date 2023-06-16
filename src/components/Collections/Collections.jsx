import CollectionCard from "./CollectionCard";

const collections  = [
    {title: 'Sushi Combo for your Next Party', tag: 'sushi', img: 'https://naira.menu/uploads/item/image/1365/fruit-sushi-combo-1995.jpeg'},
    {title: 'Everthing Bagel', tag: 'Bagel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rGs5KRfSsjzYhbLYOQfoTKJLaCSTAnAbxw&usqp=CAU'},
    {title: 'Chicken Dinner!!', tag: 'chicken', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97KJNMlUsci0xVAyrxMQXtX90d_z8IG8yrw&usqp=CAU'},
    {title: 'Indian Masti', tag: 'Indian', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3o9OCMdjOxGXMN1v1CW4y2Cy8szP33dCmrg&usqp=CAU'},
    {title: 'The Ultimate Cookie Frenzy', tag: 'cookie', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqmclCnZTm9WMPPoFV_IjsLfZKXMc7EtI3g&usqp=CAU'},
    {title: 'For the Love of Donuts', tag: 'donuts', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkfWUEaVDrrG1RSiYK_N5M0g2aet1Waiy_g&usqp=CAU'},
]

const Collections = () => {
    return (
        <div className="mx-auto w-full my-8 px-4 relative group max-w-7xl flex flex-col gap-2 ">
            <span className="text-2xl">Hand-Picked Collections</span>
            <div className="mx-auto w-full m-4 p-2 relative group max-w-7xl  flex flex-col gap-5 overflow-auto md:grid md:grid-cols-2">
                {collections.map((data, key) => <CollectionCard key={key} title={data.title} img={data.img} tag={data.tag}/>)}
            </div>
        </div>
    );
}

export default Collections