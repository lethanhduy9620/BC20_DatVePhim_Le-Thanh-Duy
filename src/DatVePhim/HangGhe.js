import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actChonGhe } from '../redux/action';

class HangGhe extends Component {
    renderHangGhe = () => {
        const { danhSachGhe, hang } = this.props.hangGhe;
        return danhSachGhe.map((ghe, index) => {
            if (hang === '') {
                return <span className='rowNumber' key={index}>{ghe.soGhe}</span>
            }

            //Ghế không phải hàng đầu tiên
            let cssGheStatus = '';
            let isDisabled = false;

            //Ghế đã được đặt
            if (ghe.daDat === true) {
                cssGheStatus = 'gheDuocChon';
                isDisabled = true;
            }

            //Ghế đang đặt
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangDat) => {
                return ghe.soGhe === gheDangDat.soGhe;
            })

            if (indexGheDangDat !== -1) {
                cssGheStatus = 'gheDangChon';
            }

            return (
                <>
                    <button
                        className={cssGheStatus !== '' ? cssGheStatus : 'ghe'}
                        disabled={isDisabled}
                        key={hang + ghe}
                        onClick={() => {
                            this.props.chonGhe({
                                soGhe: ghe.soGhe,
                                gia: ghe.gia,
                            })
                        }}
                    >{index + 1}</button>
                </>
            );

        })

    }

    render() {
        return (
            <>
                <span className='firstChar'>{this.props.hangGhe.hang}</span>
                {this.renderHangGhe(this.props.hangGhe.danhSachGhe)}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.datVePhimReducer.dannhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (ghe) => {
            dispatch(actChonGhe(ghe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
