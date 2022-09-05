import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getExamList } from '@reduxSlices/topPageSlice';
import { Button } from '@mui/material';
import LoadingWrapper from '@components/LoadingWrapper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SelectExam = ({ examList, handleGetExamList, loadingContent }) => {
  useEffect(() => {
    handleGetExamList();
  }, []);

  return (
    <LoadingWrapper isLoading={loadingContent}>
      <div className="w-full min-h-[713px] flex justify-center bg-[#eff0f4] py-[120px]">
        <div className=" lg:w-[92%] xl:w-[70%] flex justify-around">
          {Array.isArray(examList) &&
            examList.length > 0 &&
            examList.map((exam, index) => (
              <div key={`exam${index}`} className="w-[30%] max-w-[400px]">
                <div className="rounded-[30px]">
                  <img className="w-full" alt="exam image" src={exam.examImg} />
                </div>
                <h2 className="flex justify-center my-2">{exam.examTitle}</h2>
                <p className="min-h-[80px]">{exam.examContent}</p>
                <div className="flex justify-end">
                  <Button className="flex items-center" variant="outlined">
                    <p className="m-0 translate-y-[1.2px]">詳細を見る</p>
                    <ArrowForwardIosIcon
                      className="w-[15px]"
                      fontSize="small"
                    />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state) => ({
  examList: state.topPageReducer.examList,
  loadingContent: state.topPageReducer.loadingContent,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetExamList: (params) => dispatch(getExamList(params)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(SelectExam);
