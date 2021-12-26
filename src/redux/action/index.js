import { CHON_GHE, HUY_CHON_GHE } from "../constant";

const actChonGhe = (ghe) => {
    return {
        type: CHON_GHE,
        payload: ghe
    };
};

const actHuyChonGhe = (soGhe) => {
    return {
        type: HUY_CHON_GHE,
        payload: soGhe
    };
};

export { actChonGhe, actHuyChonGhe };