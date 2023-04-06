import { boardReducers } from '../reducers/board_reducer';
import axios from 'axios';
import { baseUrl } from '../../apiurl';

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`) //backend요청
      .then((response) => response.data); //연결해준 값은 data로 받아옴
    console.log(data);
    dispatch(boardReducers.getBoardList({ data })); //이름과 값이 같으면 이렇게 넘겨도 됨 ({data})
  };
}

//db접근 처리
function getBoardDetail(num) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`)
      .then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, {
        responseType: 'blob', //스프링부터에 스트림으로 받아야해서 선언해야 함.header(HttpHeaders.CONTENT_TYPE, "application/octet-stream")
      })
      .then((response) => response.data);
    //dispatch(boardActions.getBoardDownload(data));
    return data; //board_view에서만 1회성으로 사용하겠다는 의미
  };
}

function getBoardDelete(num) {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`)
      .then((response) => response.data);
  };
}

function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
  };
}

function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => response.data);
  };
}
export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardDownload,
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
};
