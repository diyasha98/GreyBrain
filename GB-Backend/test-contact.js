const testContact = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "Test User",
        email: "diyashanutribyte@gmail.com",
        subject: "Test Message",
        message: "This is a test message to verify everything works!"
      }),
    });``

    const data = await response.json();
    console.log('Response:', data);

    if (data.success) {
      console.log('\n✅ SUCCESS! Check your email inbox:');
      console.log('   - Admin email: kundudiyasha@gmail.com');
      console.log('   - User auto-reply: diyashanutribyte@gmail.com');
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

testContact();