import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem voluptatum accusamus officiis quisquam sit, doloribus molestiae nobis dolorem est qui eum beatae velit veritatis laborum, cupiditate fugit dicta tempora.
        </AppFrame>
    </Router>
)