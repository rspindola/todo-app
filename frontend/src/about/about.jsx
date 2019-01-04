import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class About extends Component{
    render(){
        return (
            <div>
                <PageHeader name='Sobre' small='Nós'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ex tellus. Ut aliquam odio justo, a fermentum est rhoncus nec. Nulla commodo fermentum arcu. Nulla facilisi. Suspendisse porttitor, libero eu accumsan tincidunt, quam mauris hendrerit enim, et rhoncus ante lorem vitae ipsum. Fusce ac eleifend elit. Etiam vitae libero consequat, commodo felis quis, ullamcorper urna. Nunc a est ac risus mollis sollicitudin. Pellentesque non cursus nisi. Vivamus vel ex id justo bibendum congue. Fusce in sem purus. Phasellus a tellus scelerisque enim ultrices faucibus a sed ex. Pellentesque laoreet pulvinar rutrum. Ut dictum iaculis lacus vel faucibus. Fusce a mauris imperdiet lorem feugiat tristique eu hendrerit sapien. Vivamus eget molestie nisl.
                </p>
                <p>
                Morbi pharetra semper augue. Cras scelerisque mauris eget dignissim tincidunt. Donec gravida urna eu purus ultrices luctus. Maecenas vestibulum sit amet nunc sodales aliquam. Quisque tempor faucibus eleifend. Proin luctus lacus mauris, a dapibus risus egestas sit amet. Vivamus eros nulla, hendrerit at felis et, tempor condimentum velit. Fusce ut justo lectus. Quisque eget venenatis diam. Fusce efficitur est sed posuere sagittis. Phasellus et augue aliquet, condimentum lacus ac, maximus tortor. Mauris magna augue, gravida vitae nisl a, ultrices mollis ligula. Fusce egestas fringilla massa, ac tempor ipsum cursus eget. Ut semper dolor lorem, non tristique est malesuada in.
                </p>
                <p>
                Mauris volutpat rhoncus pretium. Vestibulum sed magna dui. Aenean vestibulum, purus ut sollicitudin rhoncus, mi dui maximus eros, vel malesuada tortor odio ut arcu. Nulla luctus in lacus ac blandit. Curabitur eget lacus ut lacus lacinia feugiat vel vitae arcu. Donec porta orci risus, in vehicula ante interdum sit amet. Integer venenatis mollis quam, non feugiat neque mollis sit amet. Integer interdum faucibus mattis.</p>
            </div>
        )
    }
}