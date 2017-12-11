import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import "./index.css";
alert("loaded");
//const MyAwesomeReactComponent = () => ((<RaisedButton label="Sign up"/>)(<RaisedButton label="Log in"/>));
const MyAwesomeReactComponent = () =>(<div><RaisedButton
                                            label="Sign up"
                                            >
                                            </RaisedButton>
                                            <RaisedButton
                                            label="Log in"></RaisedButton></div>);
/*
const style = {
display: 'left',
float:'left',
margin: '1000px 10000px 100px 100',
                                            };
const MyMenu = () =>(<div>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Search" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Featured" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Sports" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Music" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Entertainment" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="News" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="Lifestyle" />
</Menu>
</Paper>
<Paper style={style}>
<Menu desktop={true}>
<MenuItem primaryText="More" />
<MenuItem primaryText="Government and politics" />
<MenuItem primaryText="TV" />
<MenuItem primaryText="Business & CEOs" />
</Menu>
</Paper>

</div>
);
*/
export default (MyAwesomeReactComponent);
