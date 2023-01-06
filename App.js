import  React from 'react';
import  ReactDOM from 'react-dom/client';


const Title = ()=> (<h1 id="title" key="h1">Namaste React</h1>);

const HeaderComponent = ()=>(
    <div>
        <Title/>
        <h2>Namaste React from Functional Component</h2>
        <h3>This is H3 Tag</h3>
    </div>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);
