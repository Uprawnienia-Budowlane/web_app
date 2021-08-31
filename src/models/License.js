import {Model, Schema} from '@rest-api/react-models';

const licenseSchema = Schema({
    id: {
        type: Number,
        required: true
    },
    name: String,
    user: String,
    expires_at: String,
})
export default new Model(licenseSchema,
    'id',
    'http://uprawnieniabudowlane.kylos.pl/api/licenses/1')