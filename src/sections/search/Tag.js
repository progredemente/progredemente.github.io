import { withParams } from '../../common/utils';
import Search from './Search';
 
class Tag extends Search {

    filterPosts(post) {
        return post.tags?.includes(this.searchText);
    }

    getRemainingTitle() {
        return `con la etiqueta "${this.searchText}"`
    }
}
 
export default withParams(Tag);