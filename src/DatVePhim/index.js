import React, { Component } from 'react';
import "./css/BaiTapBookingTicket.css"
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
import { connect } from 'react-redux';


class BaiTapBookingTicket extends Component {

    renderDanhSachGhe = () => {
        return this.props.danhSachGheData.map((hangGhe, index) => {
            return (
                <div key={index} className='gridHangGhe'>
                    < HangGhe hangGhe={hangGhe} />
                </div>
            );
        })
    }

    render() {
        return (
            <>
                <div className='background'>
                    <div className='background-cover'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-8'>
                                    <h2>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
                                    <h5>Màn hình</h5>
                                    <div className='screen'></div>
                                    <div>
                                        {this.renderDanhSachGhe()}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h2>DANH SÁCH GHẾ BẠN CHỌN</h2>
                                    <ThongTinDatGhe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheData: state.datVePhimReducer.danhSachGheData,
    };
};
export default connect(mapStateToProps, null)(BaiTapBookingTicket);