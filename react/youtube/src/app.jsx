import React, { Component, useState, useEffect } from 'react'; //useState 자동임포트되지 않으면 수동으로 설정하기
import VideoList from './components/video_list/video_list';




function App() {
   const [videos, setVideos] = useState( [] ); //안에 동영상 리스트가 들어와야하니까 초기화를 배열로
   // state를 사용하기 위해 useState를 사용한다
   // 컴포넌트의 상태관리를 위해서 react Hook에서 제공하는 함수
   // const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);

   // useEffect: 우리는 리액트에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지
   // useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 됩니다.
   useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    fetch( //fetch안에는 서버에서 받아오려는 주소값과 위의 옵션이 들어간다
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCsGvcbr9oYOLYGpV9tu17LhuYNqP7UomY", 
      requestOptions
      )
      .then(response => response.json()) //응답 성공 시, response를 json형식으로 반환해서 콘솔에 출력
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  // 뒤에 아무것도 작성하지 않으면 props나 state가 업데이트될 때마다 실행되고,
  // []를 넣으면 마운트될 때 한번만 실행되고,
  // [video]라고 설정하면 video가 업데이트될 때마다 실행된다.

    return <VideoList videos={videos}/>;
}

export default App;


// setVideos(result.items) 이렇게 해주면 videos 의 빈 [] 배열에 mostpopular 동영상 25개 객체로 변경되고 다시 렌더링 됩니다. 
// class 컴포넌트라고 가정하면
// this.setState({
// videos : result.items })  와 같은 표현입니다. 