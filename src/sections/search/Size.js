import { withParams } from '../../common/utils';
import Search from './Search';
 
class Size extends Search {

    filterPosts(post) {
        return post.size === this.searchText;
    }

    getRemainingTitle() {
        return `de tamaño ${this.searchText}`
    }
}
 
export default withParams(Size);