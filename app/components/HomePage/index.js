import React from 'react';
import {SideBar, Wrapper, Logo, MainCon, Task, HeadAndTaskBar, HeadAndTaskBarLeft, ListBarWrapper, FieldsWrapper, LeftIconDiv, SideBarIcon, TaskBar } from './skins';
import search from '../../images/search.svg';
import search2 from '../../images/search2.svg';
import cart from '../../images/shopping_cart-24px.svg';
import logo from '../../images/download.png';
import home from '../../images/home.svg';
import assignment from '../../images/assignment.svg';
import control_point from '../../images/control_point.svg';
import p1 from '../../images/p2.png';
import sort from '../../images/sort.svg';
import subscription from '../../images/subscriptions.svg';
import filter from '../../images/filter.svg';
import fields from '../../images/fields.svg';
import Board from './board';

export function HomePage(props) {
    const { boardData: { data } } = props;
    console.log("props", props)
    return (
        <Wrapper>
            <div>
            <Logo><img src={logo}/></Logo>
            <SideBar>
                <SideBarIcon><img src={home}/></SideBarIcon>
                <SideBarIcon><img src={search}/></SideBarIcon>
                <SideBarIcon bg><img src={subscription}/></SideBarIcon>
                <SideBarIcon><img src={assignment}/></SideBarIcon>
                <SideBarIcon><img src={cart}/></SideBarIcon>
            </SideBar>
            </div>
            <MainCon>
                <HeadAndTaskBar>
                    <div>
                        <h3>CBSE: Grade 5 maths - Algebra</h3>
                        <TaskBar>
                                <Task underline>Task</Task>
                                <Task>Conversations</Task>
                                <Task>Files</Task>
                                <Task>Resources</Task>
                                <Task>Status</Task>
                        </TaskBar>
                    </div>
                    <HeadAndTaskBarLeft>
                        <LeftIconDiv><img src={search2}/></LeftIconDiv>
                        <LeftIconDiv><img src={control_point}/></LeftIconDiv>
                        <LeftIconDiv><img src={p1}/></LeftIconDiv>
                        <p>{"ASHAKIRAN"}</p>
                    </HeadAndTaskBarLeft>
                </HeadAndTaskBar>
                <ListBarWrapper>
                    <TaskBar>
                        <Task>List</Task>
                        <Task>Gantt</Task>
                        <Task underline>Board</Task>
                        <Task>Calender</Task>
                        <Task>Pivot</Task>
                        <Task>Process</Task>
                    </TaskBar>
                    <FieldsWrapper>
                        <img src={fields}/><div>Fields</div>
                        <img src={sort}/><div>Sort</div>
                        <img src={filter}/><div>Fliter</div>
                    </FieldsWrapper>
                </ListBarWrapper>

                <Board {...data}/>
    
            </MainCon>
        </Wrapper>
    )
}
