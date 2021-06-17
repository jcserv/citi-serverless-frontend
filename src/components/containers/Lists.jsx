import React from 'react';

import { Goals } from '../Goals';
import { StonkList } from '../StonkList';

import { goals, watchlist } from "../../data";

const Lists = () => (
	<div className="d-flex row justify-content-center" style={{ marginTop: '100px' }}>
        <div className="row">
            <div className="d-flex col-6 align-items-center">
                <StonkList header="Watchlist" stocks={watchlist} />
            </div>
            <div className="col-6">
                <Goals header="Goals" goals={goals} />
            </div>
        </div>
	</div>
);

export default Lists;
