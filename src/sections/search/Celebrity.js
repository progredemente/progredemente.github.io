import { withParams } from '../../common/utils';
import Search from './Search';
 
class Celebrity extends Search {

    filterPosts(post) {
        return post.celebrities?.includes(this.searchText);
    }

    getRemainingTitle() {
        return `donde sale ${this.searchText}`
    }
}
 
export default withParams(Celebrity);