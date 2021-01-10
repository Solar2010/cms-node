import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator, EditContentValidator, DeleteContentValidator } from '../../validator/content';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
const flowApi = new LinRouter({
  prefix: '/v1/content'
});