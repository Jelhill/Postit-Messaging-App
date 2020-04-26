import React, { Component } from "react";

export default class MessageDisplay extends Component {
    render() {
        return (
            <div className="compo-1">
                <div className="sub-compo">
                  <div class="post">
                      <img src={''} alt='user' />
                      <h5>Okorie Nnamdi</h5>
                    </div>  
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Laudantium perferendis tempore neque fuga! Nobis inventore, odio
                      aliquam animi repellendus magnam sunt, tempora quibusdam, ducimus
                      consequatur est qui placeat hic sapiente libero cupiditate! Vitae
                      qui quaerat dolores placeat, ab dignissimos velit.
                    </p>
                </div>
            </div>
        )
    }
}