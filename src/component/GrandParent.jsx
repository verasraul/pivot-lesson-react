import Parent from "./Parent"


export default function GrandParent(props){


return (
    <div>Grand Parent Component 
        <Parent quote={props.quote} />
    </div>
)
};

