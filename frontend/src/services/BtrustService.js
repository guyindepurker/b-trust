import { httpService } from './HttpService';
export const btrustService = { getData };

function getData() {
  return httpService.get('btrust');
}
