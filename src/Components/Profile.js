import React, { Component } from 'react';
import {Button, Header, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'

export default class Sidebar1 extends Component {

    state = {visable: false}

    handleHideClick = () => this.setState({visable: false})
    handleShowClick = () => this.setState({visable:true})
    handleSideBarHide = () => this.setState({visable: false})
    
     render() {
         const { visable } = this.state

         return(
         <div>
             <Button.Group>
                 <Button disabled={visable} onClick={this.handleShowClick}>
                 Show Sidebar
                 </Button>
                 <Button disabled={!visable} onClick={this.handleHideClick}>
                 Hide Sidebar
                 </Button>
             </Button.Group>

             <Sidebar.Pushable as={Segment}>
             <Sidebar
             as={ Menu }
             animation='overlay'
             Icon='labeled'
             Inverted
             onHide={this.handleSideBarHide}
             vertical
             visable={visable}
             width='thin'
             >
             <Menu.Item as='a'>
             (Profile Name)
             </Menu.Item>
             <Menu.Item as='a'>
             (Birthday)
             </Menu.Item>
             <Menu.Item as='a'>
             (about)
             </Menu.Item>
             <Menu.Item as='a'>
             Edit Profile
             </Menu.Item>
             </Sidebar>

             <Sidebar.Pusher>
                 <Segment basic>
                 <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

// class Profile extends Component {
//     render() {
//         return (
//             <div>profile</div>
//         );
//     };
// };

// export default Profile;