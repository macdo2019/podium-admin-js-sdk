import {ISettings} from '../../types'
import {PodiumResource} from '../Podium/PodiumResource'

export class Flex extends PodiumResource {

    constructor(settings: ISettings) {
        super('admin/adhoc_campaign', settings)
    }

}