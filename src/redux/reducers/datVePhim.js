import Data_DanhSachGhe from './../../data/danhSachGhe.json';
import { CHON_GHE, HUY_CHON_GHE } from "../constant";

let initialState = {
    danhSachGheData: Data_DanhSachGhe,
    dannhSachGheDangDat: [],
}

const datVePhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHON_GHE:
            let dannhSachGheDangDat = [...state.dannhSachGheDangDat];
            let indexGheDangDat = dannhSachGheDangDat.findIndex((gheDangDat) => {
                return gheDangDat.soGhe === action.payload.soGhe;
            })
            if (indexGheDangDat !== -1) {
                dannhSachGheDangDat.splice(indexGheDangDat, 1);
            }
            else {
                dannhSachGheDangDat.push(action.payload);
            }
            state.dannhSachGheDangDat = dannhSachGheDangDat;
            return { ...state };
        case HUY_CHON_GHE: {
            let dannhSachGheDangDat = [...state.dannhSachGheDangDat];
            let indexGheDangDat = dannhSachGheDangDat.findIndex((gheDangDat) => {
                return gheDangDat.soGhe === action.payload;
            });
            if (indexGheDangDat !== -1) {
                dannhSachGheDangDat.splice(indexGheDangDat, 1);
            }
            state.dannhSachGheDangDat = dannhSachGheDangDat;
            return { ...state };
        }
        default:
            return { ...state };
    }
}

export default datVePhimReducer;