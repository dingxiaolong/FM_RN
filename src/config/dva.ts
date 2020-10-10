import { create } from 'dva-core-ts';
import models from '../model/index'

const app = create();

models.forEach(
    model => {
        app.model(model);
    }
)

app.start();

export default app._store;