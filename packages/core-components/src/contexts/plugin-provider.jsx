import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the PluginContext
const PluginContext = createContext();

// Define a PluginProvider component to wrap your application
export function PluginProvider({ children, plugins }) {
  // State to hold plugin data
  const [_plugins, setPlugins] = useState([]);

  useEffect(() => {
    setPlugins(plugins)
  }, [plugins])


  return (
    <PluginContext.Provider value={ _plugins}>
      {children}
    </PluginContext.Provider>
  );
}

// Custom hook to access the PluginContext
export function usePlugins() {
  const context = useContext(PluginContext);
  if (!context) {
    throw new Error('usePlugins must be used within a PluginProvider');
  }
  return context;
}