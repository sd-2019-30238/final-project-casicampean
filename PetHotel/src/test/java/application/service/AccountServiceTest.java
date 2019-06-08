package application.service;

import application.Application;
import application.model.Account;
import application.repository.AccountRepository;
import org.junit.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;

import static org.junit.Assert.*;

public class AccountServiceTest {



    @Test
    public void getAccounts() {
        String[] args={};
        ApplicationContext context = SpringApplication.run(Application.class, args);
        AccountService accountService = context.getBean(AccountService.class);
        accountService.getAccounts();
        assertEquals(4,accountService.getAccounts().size());
    }

    @Test
    public void existsAccount() {
        String[] args={};
        ApplicationContext context = SpringApplication.run(Application.class, args);
        AccountService accountService = context.getBean(AccountService.class);
        assertEquals(true,accountService.existsAccount(1));
    }

    @Test
    public void deleteAccount() {
        String[] args={};
        ApplicationContext context = SpringApplication.run(Application.class, args);
        AccountService accountService = context.getBean(AccountService.class);
        accountService.deleteAccount(5);
        assertEquals(false, accountService.existsAccount(5));
    }
}