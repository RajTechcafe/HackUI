import React from "react";
import PropTypes from "prop-types";
import Theme from "./Theme";
import ThemeList from "./ThemeList";
export default class ThemePresenter extends React.Component {

    constructor() {
        super();
        this.themeList = [
            ["Prop1", "#2345"],
            ["Prop2", "#12345"],
        ];
        this.onThemeAdded=this.onThemeAdded.bind(this);
    }
    onThemeAdded(theme) {
        debugger
        this.setState(theme,()=>{
            const list = Object.assign({},this.props.themeList);
            list.push(theme);
            return {themeList: list};
        })
    }

    render() {
        return (
            <div>
                <Theme themeAdded={this.onThemeAdded} ></Theme>
                <ThemeList themes={this.themeList}></ThemeList>
            </div>
        );
    }
};