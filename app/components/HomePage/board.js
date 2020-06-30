import React from 'react';
import {BoardsCon, Card, Calendar, CalendarDiv, Progress, CourseTitle, FlexBox, Person } from './skins';
import vert from '../../images/vert.svg';
import horizontal from '../../images/horizontal.svg';
import control_point from '../../images/control_point.svg';
import calendar from '../../images/calendar.svg';

export default function Board(props) {
    return (
        <BoardsCon>
            {Object.values(props).map( item => {
                return <Card>
                   { Object.keys(item).map( status =>{
                        return <div>
                                <FlexBox>
                                    <p>{status}</p>
                                    <img src={horizontal} />
                                </FlexBox>
                                { item[status]['courses'].map( course => {
                                    return <div>
                                            <CourseTitle color={item[status]['color']}>
                                                <FlexBox ai={"flex-start"}>
                                                    <div>{course['title']}</div>
                                                    <img src={vert} />
                                                </FlexBox>
                                                <CalendarDiv>
                                                    <div>
                                                        {course['profiles'].map( person =>{
                                                            return <Person src={person} />
                                                        })}
                                                        <img src={control_point}/>
                                                    </div>
                                                    <FlexBox>
                                                        <Calendar>
                                                            <img src={calendar} />
                                                            <p>{course['date']}</p>
                                                        </Calendar>
                                                        <Progress>
                                                            {course['progress']}
                                                        </Progress>
                                                    </FlexBox>
                                                </CalendarDiv>
                                            </CourseTitle>
                                        </div>
                                })}
                            </div>
                        })
                    }
                </Card>
            })}
        </BoardsCon>
    )
}
