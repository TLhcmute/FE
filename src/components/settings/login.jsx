import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";

const NormalLoginForm = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        message.success("Đăng nhập thành công!");

        // Save token to localStorage if needed
        if (result.token) {
        }
      } else {
        message.error(`Lỗi: ${result.message}`);
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi kết nối với API.");
    }
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập username",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>
        <a href="/forgot-password" style={{ float: "right" }}>
          Quên mật khẩu?
        </a>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Đăng nhập
        </Button>
        Hoặc <a href="/settings">Đăng ký ngay!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
