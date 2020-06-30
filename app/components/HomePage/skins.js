import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const SideBar = styled.div`
height: calc(100vh - 90px);
padding-top: 45px;
background-color: purple;
`;

export const Logo = styled.div`
height: 90px;
width: 65px;
> img{
  margin: 20px 7px;
}
`;

export const MainCon = styled.div`
width: 100%;
`;

export const SideBarIcon = styled.div`
height: 60px;
text-align: center;
${ props => props.bg && 'background-color: white'};
${ props => props.bg && 'border-radius: 5px 0 0 5px'};
> img {
  margin 18px 0;
}
`;

export const TaskBar = styled.div`
display: flex;
align-items: center;
height: 34px;
font-size: 14px;
color: ${ props => props.color || 'gray'};
`;

export const Task = styled.div`
text-align: center;
margin: 0 25px;
${ props => props.underline && 'border-bottom: 2px solid purple;'};
`;

export const HeadAndTaskBar = styled.div`
display: flex;
justify-content: space-between;
border-bottom: solid 2px #ded7d770;
margin: 12px 0;
`;

export const LeftIconDiv = styled.div`
height: 30px;
width: 30px;
border: solid 1px #9e9a9a;
border-radius: 3px;
margin: 15px 10px;
> img {
  margin: 2px;
}
`;

export const ListBarWrapper = styled.div`
display: flex;
justify-content: space-between;
border-bottom: solid 2px #ded7d770;
`;

export const HeadAndTaskBarLeft = styled.div`
display: flex;
justify-content: space-between;
margin: 12px 0;
> p {
  font-size: 15px;
  margin: 23px 3px;
}
`;

export const FieldsWrapper = styled.div`
display: flex;
align-items: center;
height: 34px;
font-size: 14px;
color: gray;
> img {
  margin: 0 10px;
}
`;


export const BoardsCon = styled.div`
display: flex;
height: calc(100% - 154px);
`;

export const Card = styled.div`
width: 25%;
background-color: #dad5d5b3;
margin: 40px;
border: solid 1px #d6cece40;
`;

export const CourseTitle = styled.div`
font-size: 14px;
color: gray;
background-color: white;
height: 100px;
padding: 12px 12px 0;
margin-bottom: 12px;
border-top: solid 2px ${ props => props.color};
`;

export const FlexBox = styled.div`
display: flex;
justify-content: space-between;
${ props => props.ai && `align-items: ${props.ai}`}
`;

export const Person = styled.img`
  margin-right: 5px;
`;

export const CalendarDiv = styled(FlexBox)`
  margin-top: 28px;
`;

export const Calendar = styled(FlexBox)`
font-size: 8px;
border: solid 0.1px #8080807a;
color: #333333;
background-color: #a0a0a024;
padding: 0 2px;
border-radius: 2px;
`;

export const Progress = styled.div`
background-color: blue;
color: white;
margin-left: 5px;
border-radius: 2px;
font-size: 12px;
padding: 6px;
`;