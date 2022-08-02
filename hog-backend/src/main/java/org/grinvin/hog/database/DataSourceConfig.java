package org.grinvin.hog.database;

import org.grinvin.hog.database.jdbc.JDBCDataAccessProvider;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Bean
    public static DataSource getDataSource() {
        DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.postgresql.Driver");
        dataSourceBuilder.url("jdbc:postgresql://database:5432/new_hogdb");
        dataSourceBuilder.username("hoguser");
        dataSourceBuilder.password("admin");
        return dataSourceBuilder.build();
    }

    /*public static DataAccessProvider getDAP(){
private final DataAccessProvder dap = JDBCDataAccessProvider.INSTANCE.getInstance();
    }*/
}
