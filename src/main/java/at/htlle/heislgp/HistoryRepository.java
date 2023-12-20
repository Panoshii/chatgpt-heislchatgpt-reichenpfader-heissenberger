package at.htlle.heislgp;

import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "history", path = "history")
public interface HistoryRepository extends PagingAndSortingRepository<History, String>, CrudRepository<History, String> {
    List<History> findByTitle(@Param("title") String title);
}