import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actHuyChonGhe } from '../redux/action';

class ThongTinDatGhe extends Component {

    renderGheDangDat = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return (
                <tr key={index}>
                    <td>{ghe.soGhe}</td>
                    <td>{new Intl.NumberFormat().format(ghe.gia)}</td>
                    <td>
                        <button className='huyChonBtn' onClick={() => {
                            this.props.huyChonGhe(ghe.soGhe);
                        }}>X</button>
                    </td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <button className='gheDuocChon'></button>
                        Ghế đã đặt
                    </li>
                    <li>
                        <button className='gheDangChon'></button>
                        Ghế đang chọn
                    </li>
                    <li>
                        <button className='ghe'></button>Ghế chưa đặt
                    </li>
                </ul>
                <table className='table' border="2">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGheDangDat()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.datVePhimReducer.dannhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        huyChonGhe: (ghe) => {
            dispatch(actHuyChonGhe(ghe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe);